import React from 'react';
import { 
  Zap, Shield, Clock, Award, Laptop, Globe, Smartphone, 
  BarChart3, Wrench, ShieldCheck, FileText, PenTool, Layout, Download, Terminal 
} from 'lucide-react';

// Diccionario: Texto -> Componente Real
const ICON_MAP = {
  zap: Zap, shield: Shield, clock: Clock, award: Award,
  laptop: Laptop, globe: Globe, smartphone: Smartphone,
  chart: BarChart3, wrench: Wrench, shieldCheck: ShieldCheck,
  file: FileText, pen: PenTool, layout: Layout, download: Download,
  terminal: Terminal
};

const Icon = ({ name, size = 24, className = "" }) => {
  const LucideIcon = ICON_MAP[name];
  if (!LucideIcon) return null; // Si no encuentra el icono, no renderiza nada
  return <LucideIcon size={size} className={className} />;
};

export default Icon;