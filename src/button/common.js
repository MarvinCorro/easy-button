const PrimarySizeModel = {
  Small: {
    width: "155px",
    height: "40px",
    padding: "5px",
  },
  Medium: {
    width: "174px",
    height: "44px",
    padding: "5px",
  },
  Large: {
    width: "182px",
    height: "48px",
    padding: "5px",
  },
  ExtraLarge: {
    width: "216px",
    height: "60px",
    padding: "5px",
  }
}

const SecondarySizeModel = {
  Small: {
    width: "155px",
    height: "40px",
    padding: "5px",
  },
  Medium: {
    width: "174px",
    height: "44px",
    padding: "5px",
  },
  Large: {
    width: "182px",
    height: "48px",
    padding: "5px",
  },
  ExtraLarge: {
    width: "216px",
    height: "60px",
    padding: "5px",
  }
}

const TertiarySizeModel = {
  Small: {
    width: "155px",
    height: "40px",
    padding: "5px",
  },
  Medium: {
    width: "174px",
    height: "44px",
    padding: "5px",
  },
  Large: {
    width: "182px",
    height: "48px",
    padding: "5px",
  },
  ExtraLarge: {
    width: "216px",
    height: "60px",
    padding: "5px",
  }
}

const LinkColorSizeModel = {
  Small: {
    width: "155px",
    height: "40px",
    padding: "5px",
  },
  Medium: {
    width: "174px",
    height: "44px",
    padding: "5px",
  },
  Large: {
    width: "182px",
    height: "48px",
    padding: "5px",
  },
  ExtraLarge: {
    width: "216px",
    height: "60px",
    padding: "5px",
  }
}

const LinkGraySizeModel = {
  Small: {
    width: "155px",
    height: "40px",
    padding: "5px",
  },
  Medium: {
    width: "174px",
    height: "44px",
    padding: "5px",
  },
  Large: {
    width: "182px",
    height: "48px",
    padding: "5px",
  },
  ExtraLarge: {
    width: "216px",
    height: "60px",
    padding: "5px",
  }
}

const DestructiveSizeModel = {
  Small: {
    width: "155px",
    height: "40px",
    padding: "5px",
  },
  Medium: {
    width: "174px",
    height: "44px",
    padding: "5px",
  },
  Large: {
    width: "182px",
    height: "48px",
    padding: "5px",
  },
  ExtraLarge: {
    width: "216px",
    height: "60px",
    padding: "5px",
  }
}

export const ButtonModel = {
  Primary: {
    normal: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#4338CA",
      color: "#FFFFFF",
    },
    hover: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#3730A3",
      color: "#FFFFFF",
    },
    focus: {
      border: '1px solid rgba(68, 76, 231, .12)',
      borderRadius: '15px',
      backgroundColor: "#3730A3",
      color: "#FFFFFF",
    },
    disabled: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#F5F5F5",
      color: "#A3A3A3",
    },
    size: PrimarySizeModel,
  },
  Secondary: {
    normal: {
      border: '1px solid #E6E6E6',
      borderRadius: '15px',
      backgroundColor: "#FFFFFF",
      color: "#171717",
    },
    hover: {
      border: '1px solid #E6E6E6',
      borderRadius: '15px',
      backgroundColor: "#FAFAFA",
      color: "#0A0A0A",
    },
    focus: {
      border: '1px solid rgba(68, 76, 231, .12)',
      borderRadius: '15px',
      backgroundColor: "#E6E6E6",
      color: "#0A0A0A",
    },
    disabled: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#F5F5F5",
      color: "#A3A3A3",
    },
    size: SecondarySizeModel,
  },
  Tertiary: {
    normal: {
      border: 'none',
      backgroundColor: "transparent",
      color: "#4338CA",
    },
    hover: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#FAFAFA",
      color: "#4338CA",
    },
    focus: {
      border: '1px solid rgba(68, 76, 231, .12)',
      borderRadius: '15px',
      backgroundColor: "#FAFAFA",
      color: "#4338CA",
    },
    disabled: {
      border: 'none',
      backgroundColor: "transparent",
      color: "#A3A3A3",
    },
    size: TertiarySizeModel,
  },
  LinkColor: {
    normal: {
      border: 'none',
      backgroundColor: "transparent",
      color: "#4338CA",
    },
    hover: {
      border: 'none',
      backgroundColor: "transparent",
      color: "#3730A3",
    },
    focus: {
      border: '1px solid rgba(68, 76, 231, .12)',
      borderRadius: '15px',
      backgroundColor: "transparent",
      color: "#3730A3",
    },
    disabled: {
      border: 'none',
      backgroundColor: "transparent",
      color: "#FFFFFF",
    },
    size: LinkColorSizeModel,
  },
  LinkGray: {
    normal: {
      border: 'none',
      backgroundColor: "transparent",
      color: "#525252",
    },
    hover: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "transparent",
      color: "#171717",
    },
    focus: {
      border: '1px solid rgba(68, 76, 231, .12)',
      borderRadius: '15px',
      backgroundColor: "transparent",
      color: "#171717",
    },
    disabled: {
      border: 'none',
      backgroundColor: "transparent",
      color: "#A3A3A3",
    },
    size: LinkGraySizeModel,
  },
  Destructive: {
    normal: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#DC2626",
      color: "#FFFFFF",
    },
    hover: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#B91C1C",
      color: "#FFFFFF",
    },
    focus: {
      border: '1px solid rgba(217, 45, 32, .12)',
      borderRadius: '15px',
      backgroundColor: "#B91C1C",
      color: "#FFFFFF",
    },
    disabled: {
      border: 'none',
      borderRadius: '15px',
      backgroundColor: "#4338CA",
      color: "#FFFFFF",
    },
    size: DestructiveSizeModel,
  },
}
