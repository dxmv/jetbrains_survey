# Survey Insights Dashboard

A lightweight dashboard for exploring trivia questions fetched from the Open Trivia Database. It highlights category and difficulty distribution, offers quick filtering, and keeps the experience friendly on both desktop and mobile devices.

## Features
- Fetches and normalises 50 trivia questions from the Open Trivia DB API
- Category filter that keeps charts and table in sync
- Responsive layout with horizontal scroll support for wide tables
- Difficulty pie chart and category bar chart with labelled counts
- Polished loading/error states with retry support

## Tech Stack
- React + TypeScript
- Vite + SWC
- Recharts for visualisations
- Vanilla CSS (global stylesheet)

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

## Project Structure
```
src/
  components/
    charts/        # Recharts-based visualisations
    TableAndDifficulty.tsx
    QuestionsTable.tsx
    StatusMessage.tsx
  hooks/
    useQuestions.ts
    useQuestionPropertyCount.ts
  assets/
  index.css        # Global styling
  App.tsx
```

## API
Questions are retrieved from [`https://opentdb.com/api.php`](https://opentdb.com/api.php) using URL-encoded payloads so special characters display correctly. See `src/hooks/useQuestions.ts` for normalisation details.

## TODO
- [x] fetch at least 50 questions from the api
- [x] display the list of question categories
- [x] get rid of html codes
- [x] hook for getting property count
- [x] category chart
- [x] difficulty chart
- [x] handle loading and error states for the request
- [x] display counts in charts
- [x] filter by category
- [x] on filter change the table and difficulty chart
- [x] make it look better
- [x] make error look better
- [x] make loading look better
- [x] make the application responsive
- [ ] optimise the app
- [ ] favicon
- [ ] add comments
- [x] modify the readme
