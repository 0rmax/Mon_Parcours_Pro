document.addEventListener("DOMContentLoaded", () => {
    const descriptions={
        "arduino.png": "A la fin du collège, j'ai eu la possibilité de participer à un atelier découverte de la programmation avec arduino. C'est en parti grâce à cet atelier que je souhaite aujourd'hui construire mon avenir dans l'informatique. J'y ai découvert les bases du C et ai eu la possibilité de programmer des petits objets tel qu'un mini piano ou une simulation de feu tricolore avec des leds et bien d'autres découvertes. ",
        "photo_stage.png": " J'ai eu la chance d'effectué deux stages d'observations à la direction des services informatiques de la Mairie de Concarneau. J'étais déjà intéressé par le domaine de l'informatique mais je n'étais pas sûr de vouloir poursuivre mes études dedans. Ces stages n'ont fait que confirmer mon choix, en plus de m'apporter des connaissances supplémentaires dans le domaine informatique. J'ai pu observer et aider à la résolution de tickets, c'est à dire aider un utilisateur lorsqu'il a besoin d'aide informatique, ou encore à la réparation et à l'initialisation d'ordinateurs.  ",
        "photo_robot.png": "Je travail actuellement sur un projet en groupe dans le cadre de mes études qui consiste à construire un robot en LEGO NXT capable de rejoindre une source de lumière en traversant un parcours d'obstacles. Ce projet est très intéressant puisqu'il permet de développoer l'entraide et le travail en équipe. De plus, il développe mes compétences en programmation, en électronique ainsi qu'en mécanique.",
        

    };
    const zone = document.getElementById("description-texte");
    document.addEventListener("click", (e) => {
        const nom = e.target.getAttribute("src");
        zone.textContent = descriptions[nom] || "Aucune description disponible";
    });
});