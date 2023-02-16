import { execSync } from "child_process";
import { renameSync } from "fs";

const files = execSync("echo static/**/*.*")
  .toString("utf8")
  .split(/\s/)
  .filter(Boolean);
for (const oldName of files) {
  const newName = oldName
    .replace("Janvier", "janvier")
    .replace("Février", "fevrier")
    .replace("Mars", "mars")
    .replace("Avril", "avril")
    .replace("Mai", "mai")
    .replace("Juin", "juin")
    .replace("Juillet", "juillet")
    .replace("Aout", "aout")
    .replace("Septembre", "septembre")
    .replace("Octobre", "octobre")
    .replace("octrobre", "octobre")
    .replace("otobre", "octobre")
    .replace("Novembre", "novembre")
    .replace("Décembre", "decembre")
    .replace("decmbre", "decembre")
    .replace("dedembre", "decembre")
    .replace("_", ".")
    .replace("rostov.russia", "Rostov,-Russia")
    .replace("palais-de-tokyo.paris", "Palais-de-Tokyo,-Paris")
    .replace("..", ".")
    .replace(".JPG", ".jpg")
    .replace(/\/([0-9]{4})/, (_, $1) => `/janvier${$1}`)
    .replace(".bw", ",-bw")
    .replace("everyday", "janvier2023")
    .replace("saintdenis.saintdenis", "Saint--Denis,-Saint--Denis")
    .replace("trouville.normandie", "trouville,-normandie")
    .replace("paris.palaisdetokyo", "Palais-de-Tokyo,-Paris")
    .replace("myst.paris-sud", "myst,-paris-sud");
  if (oldName !== newName) {
    console.log(oldName);
    console.log(newName);
    console.log("-");
    renameSync(oldName, newName);
  }
}
