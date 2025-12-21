import { Sphere } from "@react-three/drei";

export default function AISphere() {
  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial color="#8B5CF6" wireframe />
    </Sphere>
  );
}
