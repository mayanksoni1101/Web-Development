import React from "react";
export default function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / items.length) * 100);
  if (!items.length) {
    return (
      <em className="stats">Start adding items to your Travel List 💼.</em>
    );
  }
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <span>You,ve got everything packed, JUST Leave ✈️.</span>
      ) : (
        <React.Fragment>
          <p>🧳 You have {items.length} items on your list.</p>
          <p>
            🧳 You have packed {packedItems} items.
            <span>({percentage} %)</span>
          </p>
          <small>© 2025 Far Away Travel Co.</small>
        </React.Fragment>
      )}
    </footer>
  );
}
