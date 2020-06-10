const passwordValidation = (p) => {
    const regexL = /^.{8,20}$/;
    const regexN = /\d/;
    const regexA = /[a-z]/;
    const regexAc = /[A-Z]/;
    const regexS = /\W/;

    const vPasswordL = p.match(regexL);
    const vPasswordN = p.match(regexN);
    const vPasswordA = p.match(regexA);
    const vPasswordAc = p.match(regexAc);
    const vPasswordS = p.match(regexS);

    if (vPasswordL === null) {
        throw Error(
            "password must have 8 to 20 charakters or has a not allowed charakter"
        );
    }

    if (vPasswordN === null) {
        throw Error("password must have a number");
    }

    if (vPasswordA === null) {
        throw Error("password must have a letter");
    }

    if (vPasswordAc === null) {
        throw Error("password must have a capital letter");
    }

    if (vPasswordS === null) {
        throw Error("password must have a special character");
    }
};

const emailValidation = (e) => {
    const regexL = /^.{5,998}$/;
    const regexE = /^\w*\56?\w*@\w+\56\w{2,}$/;

    const vEmailL = e.match(regexL);
    const vEmailE = e.match(regexE);

    if (vEmailL === null) {
        throw Error("email must have 5 to 998 characters");
    }

    if (vEmailE === null) {
        throw Error("email has not the right format");
    }
};

export { passwordValidation, emailValidation };
