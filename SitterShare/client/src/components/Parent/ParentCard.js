import React from "react"

export const ParentCard = ({ parent }) => (
    <section className="parent">
        <h3 className="animal__name">{parent.firstName} {parent.lastName}</h3>
    </section>
)