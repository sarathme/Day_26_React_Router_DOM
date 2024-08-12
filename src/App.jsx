import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

const courses = [
  {
    id: 1254,
    name: "Python Programming",
    catogary: ["full-stack", "datascience"],
    img: "https://placehold.co/200",
  },
  {
    id: 1265,
    name: "Network Security",
    catogary: ["cyber-security"],
    img: "https://placehold.co/200",
  },
  {
    id: 1267,
    name: "Ethical Hacking",
    catogary: ["cyber-security"],
    img: "https://placehold.co/200",
  },
  {
    id: 1266,
    name: "Endpoint Protection",
    catogary: ["cyber-security"],
    img: "https://placehold.co/200",
  },
  {
    id: 1255,
    name: "Data Analysis - Python",
    catogary: ["datascience"],
    img: "https://placehold.co/200",
  },
  {
    id: 1256,
    name: "Data Visualization - Python",
    catogary: ["datascience"],
    img: "https://placehold.co/200",
  },
  {
    id: 1251,
    name: "Django Full Stack - Python",
    catogary: ["full-stack"],
    img: "https://placehold.co/200",
  },
  {
    id: 1257,
    name: "MERN - Javascript",
    catogary: ["full-stack", "career"],
    img: "https://placehold.co/200",
  },
  {
    id: 1258,
    name: "MEAN - Javascript",
    catogary: ["full-stack", "career"],
    img: "https://placehold.co/200",
  },
  {
    id: 1252,
    name: "Java Full Stack - Springboot",
    catogary: ["full-stack"],
    img: "https://placehold.co/200",
  },
  {
    id: 1259,
    name: "Data Science",
    catogary: ["datascience", "career"],
    img: "https://placehold.co/200",
  },
  {
    id: 1260,
    name: "UI/UX Design",
    catogary: ["career"],
    img: "https://placehold.co/200",
  },
  {
    id: 1261,
    name: "Data Engineering Course with Bigdata and Hadoop",
    catogary: ["datascience", "career"],
    img: "https://placehold.co/200",
  },
];

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Navigate to="all" />} />
        <Route path="all" element={<ProductList courses={courses} />} />
        <Route path="full-stack" element={<ProductList courses={courses} />} />
        <Route
          path="cyber-security"
          element={<ProductList courses={courses} />}
        />
        <Route path="career" element={<ProductList courses={courses} />} />
        <Route path="datascience" element={<ProductList courses={courses} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
