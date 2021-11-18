import AboutContent from "@/components/About/Content";
import ResponsiveDrawer from "@/components/Shared/AppFrame";

function About() {
    return (
        <ResponsiveDrawer
            content={<AboutContent />}
        />
    );
}

export default About;
