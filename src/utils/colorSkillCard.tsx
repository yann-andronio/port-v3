 export const getGradientColor = (color: string) => {
    switch (color) {
      case "cyan":
        return "from-cyan-500/15";
      case "emerald":
        return "from-emerald-500/15";
      case "indigo":
        return "from-indigo-500/15";
      default:
        return "from-gray-500/10";
    }
  };

 export  const getShadowColor = (color: string) => {
    switch (color) {
      case "cyan":
        return "shadow-cyan-500/30";
      case "emerald":
        return "shadow-emerald-500/30";
      case "indigo":
        return "shadow-indigo-500/30";
      default:
        return "shadow-gray-500/20";
    }
  };
