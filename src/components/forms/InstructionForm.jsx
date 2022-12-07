import "../../styles/forms/InstructionForm.css";

function InstructionForm({ instruction }) {
  return (
    <div className="instructionForm">
      <p>{instruction}</p>
    </div>
  );
}

export default InstructionForm;
