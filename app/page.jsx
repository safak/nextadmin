import { redirect } from "next/navigation";

const Homepage = () => {
  return redirect("/login");
};

export default Homepage;
