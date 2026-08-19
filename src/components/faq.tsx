"use client";

import { useState } from "react";
import { faqs } from "@/data/clinic";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div className="faq-item" key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{faq.question}</span>
                <i aria-hidden="true">{open ? "−" : "+"}</i>
              </button>
            </h3>
            <div className="faq-answer" id={`faq-panel-${index}`} hidden={!open}>
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
