import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function LandingFAQ() {
  return (
    <div
      style={{
        backgroundColor: "rgb(255 251 247)",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <div
        style={{
          padding: "0 16px", // Default padding
          paddingTop: "24px",
          paddingBottom: "24px",
          margin: "0 auto",
          maxWidth: "800px", // Max width for content
        }}
      >
        <Typography
          variant="h3"
          color="success"
          sx={{
            marginBottom: "33px", // Margin below heading
            textAlign: "center", // Centered heading
          }}
        >
          Frequently asked questions
        </Typography>

        <Accordion
          sx={{
            marginBottom: { xs: "12px", sm: "16px" }, // Margin below each accordion
            padding: { xs: "8px", sm: "12px" }, // Padding inside each accordion
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>What is detailing? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Detailing involves paying close attention to every small aspect of
              a task or object to ensure precision, cleanliness, and
              thoroughness. It’s often used in car maintenance, project
              planning, and design.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: { xs: "12px", sm: "16px" }, // Margin below each accordion
            padding: { xs: "8px", sm: "12px" }, // Padding inside each accordion
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Why is detailing important?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Detailing enhances the quality, appearance, and functionality of
              the object or project, ensuring that everything is done to the
              highest standard.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: { xs: "12px", sm: "16px" }, // Margin below each accordion
            padding: { xs: "8px", sm: "12px" }, // Padding inside each accordion
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              How long does a typical detailing process take?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The time required depends on the size and complexity of the task.
              For example, car detailing can take 2–8 hours, while project
              detailing may take weeks.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: { xs: "12px", sm: "16px" }, // Margin below each accordion
            padding: { xs: "8px", sm: "12px" }, // Padding inside each accordion
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              What tools or materials are required for detailing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This depends on the field. For car detailing, it could include
              cleaning solutions, brushes, polish, and wax. For project
              detailing, it might involve documentation, software, and review
              tools.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: { xs: "12px", sm: "16px" }, // Margin below each accordion
            padding: { xs: "8px", sm: "12px" }, // Padding inside each accordion
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>
              What skills are required for effective detailing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Attention to detail Patience and focus Proficiency in relevant
              tools or methods A thorough understanding of the subject matter
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
