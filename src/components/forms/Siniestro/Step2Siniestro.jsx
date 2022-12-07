import { useSelector } from "react-redux";

export default function Step2Siniestro() {
  const stateSiniestro = useSelector((state) => state.siniestro);

  const [data, setData] = useState(initialState);

  return (
    <>
      <div>Paso 2</div>
      {stateSiniestro.producto === "1" && <div> producto 1 </div>}
  
    </>
  );
}
