import { Select, SelectItem } from "@nextui-org/react";

export default function Filter() {
  const list = [
    { key: "SUVs", label: "SUVs" },
    { key: "Pickups", label: "Pickups" },
    { key: "Sedan", label: "Sedan" },
    { key: "Minivans", label: "Minivans" },
    { key: "Deportivos", label: "Deportivos" },
  ];

  return (
    <div className="flex flex-col flex-grow p-4">
      <h2>Filtros</h2>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
        <Select
          className="max-w-[200px] w-full"
          label="Categoría"
          placeholder="Seleccióne una categoría"
        >
          {list.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-xs w-full"
          label="Categoría"
          placeholder="Seleccióne uno"
        >
          {list.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-xs w-full"
          label="Categoría"
          placeholder="Seleccióne una categoría"
        >
          {list.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
