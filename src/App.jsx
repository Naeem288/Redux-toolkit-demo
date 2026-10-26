import { useSelector } from "react-redux";
import Layout from "./props drilling/Layout";
import Result from "./context API/Result";
import { UserProvider } from "./context API/UserProvider";
import UserProfile from "./components/UserProfile";
import AddBlogForm from "./components/AddBlogForm";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  return (
    <main className="min-h-screen flex flex-col bg-gray-100 p-6 gap-4">
      {/* Props Drilling */}
      {/* <Layout userName="Ali" /> */}

      {/* Context API */}
      {/* <UserProvider>
        <Result />
      </UserProvider> */}

      {/* Redux Toolkit */}

      <div className="mx-auto w-full max-w-7xl space-y-6">
        <Header/>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="order-2 space-y-6 lg:order-1">
            <AddBlogForm />
            <UserProfile />
          </div>

          <section className="order-1 lg:order-2 lg:col-span-2">
            <BlogList />
          </section>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
