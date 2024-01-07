import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EventsSelect from "../search-forms/EventsSelect";
import closeSymbol from "/src/client/assets/closeSymbol.svg";
import EventAccordion from "../result-accordions/EventAccordion";

const eventsData = [
  {
    category_id: 2,
    component_id: 4,
    title: "Summer Music Festival",
    description: "An outdoor music festival featuring various artists.",
    start_date_time: "2024-06-21 12:00:00+00",
    end_date_time: "2024-06-23 23:00:00+00",
    location_name: "Central Park",
    address: "123 Park Ave, New York, NY",
    event_type: "Music",
    price: 150,
    event_url: "https://example.com/events/summer-music-festival",
    photo_url:
      "data:image/jpeg;base64,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",
  },
];

export default function EventsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Search Events</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="search-modal">
          <button className="close-button" onClick={handleClose}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <Typography className="modal-title" id="modal-modal-title" variant="h6" component="h2">
            Search Events
          </Typography>
          <EventsSelect />
          <ul>
            {eventsData.map((eventData) => (
                <EventAccordion key={eventData.component_id} eventData={eventData}/>
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
}
