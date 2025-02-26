# Next.js Pokémon Explorer

This is a **Next.js** project that fetches and displays Pokémon data using the **PokéAPI**.

## 📌 Getting Started

### 1️⃣ Install Dependencies

First, make sure you have **Node.js** installed on your system. Then, install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2️⃣ Run the Development Server

Start the local development server using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This will start a local server, and you can view the app by opening **[http://localhost:3000](http://localhost:3000)** in your browser.

## 📍 Default Route: Display All Pokémon

- The default route is **`/pages/Home`** where all Pokémon are listed.
- The app fetches **150 Pokémon** from the **PokéAPI**.
- Pokémon cards are displayed in a **grid format** with search functionality.

## 🛠 Project Structure

```
📂 app/
 ├── 📂 pages/
 │    ├── 📂 Home/            # Displays all Pokémon
 │    ├── 📂 Pokemon/[id]/    # Displays Pokémon details
 │
 ├── 📂 components/
 │    ├── PokemonCard.tsx     # Individual Pokémon Card
 │    ├── SearchBar.tsx       # Search functionality
 │
 ├── 📂 utils/
 │    ├── api.ts              # Fetch Pokémon data
 │
 ├── next.config.js           # Next.js configuration
 ├── package.json             # Project dependencies
```

## 🔧 Features
✅ **Fetch Pokémon data from API**  
✅ **Search for Pokémon by name**   
✅ **Responsive Design**  



