// ===== function 1
function introduction(name){
    return `Hi, my name is ${name}.`;
}

console.log(introduction("Arnold"));

//=====  function 2
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Arnold", "Swahili"));

//=====  function 3
function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Jorge"));
