import { UserButton } from "@clerk/nextjs";

const Home = () => <UserButton afterSignOutUrl="/" />;

export default Home;
