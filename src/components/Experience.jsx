import { PresentationControls, Stage } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Suspense } from "react";
import TeslaRoadster from "./TeslaRoadster";

const Experience = (props) => {

    return (
        <PresentationControls speed={1.5} global zoom={1} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"city"} intensity={0.6} shadows={false} adjustCamera={1}>
            <TeslaRoadster carColor ={props.carColor}/>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.58,0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
                />
            </mesh>
        </PresentationControls>
    )
}

export default Experience;