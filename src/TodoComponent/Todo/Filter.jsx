export function Filter({value, onChange}) {
  return (
    <div>
      <label >
        Фільтер по імені
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Фільтер..."
        />
      </label>
    </div>
  );
}
