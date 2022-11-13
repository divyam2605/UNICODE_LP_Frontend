import React from "react";

export const Meme = ({ template, onClick }) => {
    return (
        <img 
            width={200}
            height={200} 
            key={template.id} 
            src={template.url} 
            alt={template.name}
            onClick={onClick}
      />
    )
}