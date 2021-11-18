import HomeContent from "@/components/Home/Content";
import ResponsiveDrawer from "@/components/Shared/AppFrame";

function Home() {
    return (
        <ResponsiveDrawer
            content={<HomeContent />}
        />
    );
}

export default Home;
