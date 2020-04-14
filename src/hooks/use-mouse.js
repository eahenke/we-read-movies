import { useMouse as useMouseRaw, useMouseHovered as useMouseHoveredRaw } from 'react-use';

function convertPropertyNames({ docX, docY, elX, elY, elW, elH, posX, posY }) {
    return {
        docX,
        docY,
        elementPositionX: posX,
        elementPositionY: posY,
        inElementX: elX,
        inElementY: elY,
        elementWidth: elW,
        elementHeight: elH
    };
}

function useMouse(...args) {
    return convertPropertyNames(useMouseRaw(...args));
}

function useMouseHovered(...args) {
    return convertPropertyNames(useMouseHoveredRaw(...args));
}

export { useMouse, useMouseHovered };
