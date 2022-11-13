import React from "react";

export const Meme2 = ({ template, onClick }) => {
    return (
        <img 
            width={500}
            height={500} 
            key={template.id} 
            src={template.url} 
            alt={template.name}
            onClick={onClick}
      />
    )
}