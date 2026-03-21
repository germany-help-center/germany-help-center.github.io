import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const repository = process.env.GITHUB_REPOSITORY ?? "";
  const [owner, repoName] = repository.split("/");
  const isPagesBuild = process.env.GITHUB_ACTIONS === "true";
  const isUserOrOrgSite = repoName === `${owner}.github.io`;

  return {
    base: isPagesBuild ? (isUserOrOrgSite ? "/" : `/${repoName}/`) : "/",
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
