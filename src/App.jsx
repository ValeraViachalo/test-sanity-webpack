import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

import Blog  from './pages/Blog/Blog'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import Home from "./pages/Home/Home";
import ReactLenis from "@studio-freight/react-lenis";

const queryC = new QueryClient();

function App() {
  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'blogs',
          children: [
            {
              path: ":blogId?",
              element: <BlogDetails />,
            },
          ],
        }
      ],
    },
    // {
    //   path: "*",
    //   element: <ErrorPage />,
    // },
  ]);

  const location = useLocation();

  return (
    <QueryClientProvider client={queryC}>
      <ReactLenis root options={{ duration: 1.5 }}>
        <main style={{ marginBottom: "250lvh" }}>
            <AnimatePresence mode="wait" initial={false}>
              {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
        </main>
      </ReactLenis>
    </QueryClientProvider>
  );
}

export default App;
