import { Switch, Route } from "wouter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ReviewOfSystems from "@/pages/review-of-systems";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ReviewOfSystems} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}

export default App;
