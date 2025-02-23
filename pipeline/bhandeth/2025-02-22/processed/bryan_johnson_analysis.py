import json
from typing import Dict, List
import re
from datetime import datetime

class BryanJohnsonAnalyzer:
    def __init__(self):
        self.topics = {
            'health': ['diet', 'supplements', 'exercise', 'sleep', 'metrics', 'blood', 'measurement'],
            'longevity': ['aging', 'lifespan', 'longevity', 'biological age'],
            'technology': ['AI', 'machine learning', 'blueprint', 'data'],
            'lifestyle': ['routine', 'protocol', 'habits', 'zero']
        }
        
    def analyze_tweets(self, jsonl_file: str) -> Dict:
        tweets = []
        with open(jsonl_file, 'r') as f:
            for line in f:
                tweet = json.loads(line)
                # Filter for Bryan Johnson's tweets by looking for characteristic content
                if any(keyword in tweet['text'].lower() for keyword in 
                    ['blueprint', 'protocol', 'metrics', 'blood', 'biological age', 
                     'sleep', 'cortisol', 'glucose']):
                    tweets.append(tweet['text'])
        
        # Only analyze if we have Bryan Johnson tweets
        if not tweets:
            return {
                'error': 'No Bryan Johnson tweets found in the dataset'
            }
        
        analysis = {
            'main_topics': self._identify_main_topics(tweets),
            'mood': self._analyze_mood(tweets),
            'location_hints': self._extract_location(tweets),
            'summary': self._generate_summary(tweets)
        }
        
        return analysis
    
    def _identify_main_topics(self, tweets: List[str]) -> Dict:
        topic_counts = {topic: 0 for topic in self.topics.keys()}
        for tweet in tweets:
            lower_tweet = tweet.lower()
            for topic, keywords in self.topics.items():
                if any(keyword.lower() in lower_tweet for keyword in keywords):
                    topic_counts[topic] += 1
        return topic_counts
    
    def _analyze_mood(self, tweets: List[str]) -> str:
        positive_words = ['excited', 'great', 'amazing', 'breakthrough', 'progress']
        negative_words = ['concerned', 'worried', 'difficult', 'challenge']
        
        positive_count = 0
        negative_count = 0
        
        for tweet in tweets:
            lower_tweet = tweet.lower()
            positive_count += sum(1 for word in positive_words if word in lower_tweet)
            negative_count += sum(1 for word in negative_words if word in lower_tweet)
            
        if positive_count > negative_count:
            return "Generally positive and optimistic"
        elif negative_count > positive_count:
            return "More serious and analytical"
        return "Neutral and factual"
    
    def _extract_location(self, tweets: List[str]) -> List[str]:
        location_patterns = [
            r'in ([A-Z][a-z]+ ?(?:[A-Z][a-z]+)?)',
            r'from ([A-Z][a-z]+ ?(?:[A-Z][a-z]+)?)',
            r'at ([A-Z][a-z]+ ?(?:[A-Z][a-z]+)?)'
        ]
        
        locations = []
        for tweet in tweets:
            for pattern in location_patterns:
                matches = re.findall(pattern, tweet)
                locations.extend(matches)
        
        return list(set(locations))
    
    def _generate_summary(self, tweets: List[str]) -> str:
        recent_tweets = tweets[-10:]  # Focus on most recent tweets
        summary = []
        
        # Extract key themes
        health_related = any('health' in tweet.lower() or 'diet' in tweet.lower() for tweet in recent_tweets)
        tech_related = any('AI' in tweet or 'technology' in tweet.lower() for tweet in recent_tweets)
        research_related = any('study' in tweet.lower() or 'research' in tweet.lower() for tweet in recent_tweets)
        
        if health_related:
            summary.append("Recent focus on health optimization and biometric measurements")
        if tech_related:
            summary.append("Discussing technological innovations and AI developments")
        if research_related:
            summary.append("Sharing scientific research and study findings")
            
        return " | ".join(summary) if summary else "No clear recent themes identified"

def main():
    analyzer = BryanJohnsonAnalyzer()
    analysis = analyzer.analyze_tweets('pipeline/bhandeth/2025-02-22/processed/bryan_johnson_tweets.jsonl')
    
    if 'error' in analysis:
        print(f"\nError: {analysis['error']}")
        return
        
    print("\nBryan Johnson Tweet Analysis")
    print("=" * 30)
    print(f"\nMain Topics Discussed:")
    for topic, count in analysis['main_topics'].items():
        print(f"- {topic.capitalize()}: {count} mentions")
    print(f"\nOverall Mood: {analysis['mood']}")
    if analysis['location_hints']:
        print(f"\nMentioned Locations: {', '.join(analysis['location_hints'])}")
    print(f"\nRecent Topics Summary:\n{analysis['summary']}")

if __name__ == "__main__":
    main() 