import { Button } from "../ui/button";
import "../App.css";
import cv from "../assets/pdf/AJ056.pdf"; 
import '../ui/button'

export function MovingBorderDemo() {
  const handleResumeClick = async () => {
    try {
      const response = await fetch(cv);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Open the PDF in a new tab for preview
      window.open(url, "_blank");

      // Clean up by revoking the object URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border border-gradient"
        onClick={handleResumeClick} // Attach click event handler
      >
        Resume
      </Button>
    </div>
  );
}
