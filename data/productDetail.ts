import { Calendar, Expand, Package, Palette, Shirt, Store } from "lucide-react";

const productDetails = [
  {
    id: 1,
    icon: Calendar,
    label: "Launch Date",
    value: "21-8-2025",
  },
  {
    id: 2,
    icon: Expand,
    label: "Size",
    value: "M",
  },
  {
    id: 3,
    icon: Palette,
    label: "Color",
    value: "Midnight Black",
  },
  {
    id: 4,
    icon: Shirt,
    label: "Material",
    value: "Premium Air Layer",
  },
  {
    id: 5,
    icon: Package,
    label: "Weight",
    value: "300 GSM",
  },
  {
    id: 6,
    icon: Store,
    label: "Purchased From",
    value: "SanShin",
    hasLink: true,
  },
];

export default productDetails;