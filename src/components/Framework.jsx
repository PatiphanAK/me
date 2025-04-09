import LogoBlock from "./Block"
import CoreTool from "./CoreTool"

export default function Framework() {
    return (
      <>
      <div className="text-center">
        <h2 className="text-4xl font-bold">My Skills on Tool</h2>
        <LogoBlock />
        <h2 className="text-4xl font-bold">How I rate my core skills</h2>
        <CoreTool />
      </div>

      </>

    )
  }
  