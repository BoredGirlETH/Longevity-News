# Longevity News AI Agent

A **Next.js** project that parses Bryan Johnson’s latest tweets, longevity-related news, and personal metrics, then displays them in a structured format. This agent is hardcoded to focus on Bryan’s health data, dietary protocols, and lifestyle experiments.

---

## Project Overview

The **Bryan Johnson Longevity Agent** scans Twitter for updates on Bryan Johnson’s longevity journey, including key insights like:

- **Sleep Stats:** Deep sleep hours, REM sleep hours.
- **Blood Markers:** Glucose variance, cortisol levels, etc.
- **Temperature Settings:** Cold plunge details, ambient room temperature.
- **Biological Age:** Comparison to chronological age.
- **Diet & Supplements:** Metformin, Rapamycin cycling, Lion's Mane.
- **Therapies & Exercise:** Cold plunges, red light therapy, Zone 2 cardio.
- **Recent Experiments:** Observed changes in glucose response, deep sleep optimization, etc.
- **Focus Areas:** Sleep, metabolic health, anti-aging interventions.
- **Overall Mood:** A neutral or factual summary.

Use this agent to keep track of daily or weekly changes in Bryan’s regimen.

---

## Key Features

1. **Tweet Parsing:** Extracts Bryan’s tweets related to longevity and personal experiments.
2. **Formatted Insights:** Presents data in a neat bullet-point style:
   - **Bryan Johnson Analysis**
   - **Latest Metrics** (sleep, blood markers, temperature, etc.)
   - **Current Protocol** (dietary regimens, supplements, therapies)
   - **Recent Experiments** (observed improvements, changes)
   - **Current Focus Areas** (health/fitness categories)
   - **Overall Mood**
3. **Next.js + Tailwind CSS:** Provides a responsive and modern UI.
4. **Easily Extensible:** You can modify the agent to track other longevity enthusiasts or integrate additional data sources.

---

## Project Structure

```bash
.
├── pages/                # Next.js pages
├── components/           # Reusable React components
├── styles/               # Global and Tailwind styles
├── public/               # Public assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS plugins
└── README.md             # You are here
```

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YourUsername/BryanJohnsonAgent.git
   cd BryanJohnsonAgent
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run Development Server**
   ```bash
   npm run dev
   ```
   This starts a local server at `http://localhost:3000`.
4. **Build for Production** (Optional)
   ```bash
   npm run build
   npm run start
   ```

---

## Usage

1. **Automatic Tweet Parsing**
   - The agent fetches Bryan Johnson’s Twitter feed for longevity-related keywords.
   - You can configure keywords or hashtags in the source code if you want to filter tweets.
2. **Display Metrics**
   - The app shows summarized health metrics and Bryan’s daily or weekly progress.
   - Example Output:
     ```text
     Bryan Johnson Analysis
     Latest Metrics
     • Sleep: 2.2 hrs deep sleep, 1.8 hrs REM
     • Blood Markers: Glucose variance ±4 mg/dl, Morning cortisol 12.3 ng/mL
     • Temperature: Cold plunge 54°F, Sleep environment 65°F
     • Biological Age: 5.2 years younger than chronological age

     Current Protocol
     • Time-Restricted Feeding (6-hour window)
     • Rapamycin cycling and Metformin
     • Lion's Mane and cognitive enhancers
     • Cold plunge therapy
     • Red light therapy
     • Zone 2 cardio
     • Meditation practice

     Recent Experiments
     • Metformin + Exercise: 31% better glucose response
     • Sleep temperature optimization: 23% increase in deep sleep
     • Lion's Mane supplementation reducing brain inflammation
     • Zero alcohol/sugar protocol (Day 732)

     Current Focus Areas
     • Sleep optimization
     • Cognitive enhancement
     • Metabolic health
     • Anti-aging interventions
     • Inflammation reduction

     Overall Mood
     • Neutral and factual
     ```
3. **Customization**
   - You can adjust the displayed metrics or add more detailed data scraping.
   - For instance, integrate labs or wearable device APIs to enrich the data.

---

## Contributing

1. **Fork** this repository.
2. **Create a branch** for your feature (`git checkout -b feature-new-protocol`).
3. **Commit changes** (`git commit -m "Added new protocol tracker"`).
4. **Push** to your fork (`git push origin feature-new-protocol`).
5. **Open a Pull Request** with a detailed description of your changes.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

**Enjoy tracking Bryan Johnson’s journey and staying up-to-date on all things longevity!**

