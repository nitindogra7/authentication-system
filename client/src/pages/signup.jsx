import AuthContainer from "../components/authContainer";
import GlowBackground from "../components/glowBackground";
import InteractiveGridBackground from "../components/lightswind/interactive-grid-background.tsx";
export default function Signup() {
  return (
    <div className="h-dvh w-full overflow-hidden bg-black text-white flex items-center justify-center ">
      <InteractiveGridBackground
        className="z-10"
        trailLength={0}
        idleRandomCount={0}
        gridSize={40}
      />
      <GlowBackground />
      <AuthContainer
        heading={"Sign In"}
        defineText={"welcome to "}
        highlightText={"authentication sytem"}
        buttonName={"Sign In"}
        anchorTagName = {"login"}
      />
    </div>
  );
}
