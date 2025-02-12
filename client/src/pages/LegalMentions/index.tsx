import { Link } from "react-router-dom";
import "./style.css";

export default function LegalMentions() {
  return (
    <section className="legal-mentions">
      <h1 className="mentions-title">Mentions Légales</h1>
      <p className="mentions-paragraphe">
        <strong>1. Éditeur du site</strong>
      </p>
      <p className="mentions-paragraphe">
        <strong>Nom du site :</strong> Regarde où tu marches
      </p>
      <p className="mentions-paragraphe">
        <strong>Responsable de la publication :</strong> Cécile Puyol
      </p>
      <p className="mentions-paragraphe">
        <strong>Email de contact :</strong> regardesoutumarches@gmail.com
      </p>
      <p className="mentions-paragraphe">
        <strong>Hébergeur :</strong> [Nom de l’hébergeur]
      </p>
      <p className="mentions-paragraphe">
        <strong>Adresse de l’hébergeur :</strong> [Adresse complète de
        l’hébergeur]
      </p>

      <p className="mentions-paragraphe">
        <strong>2. Propriété intellectuelle</strong>
      </p>
      <p className="mentions-paragraphe">
        L’ensemble des éléments présents sur ce site (textes, images, design,
        logo, etc.) sont la propriété exclusive de Regarde où tu marches sauf
        mention contraire. Toute reproduction, modification ou diffusion, même
        partielle, est interdite sans autorisation préalable.
      </p>

      <p className="mentions-paragraphe">
        <strong>3. Responsabilité</strong>
      </p>
      <p className="mentions-paragraphe">
        Regarde où tu marches s’efforce de fournir des informations précises et
        à jour, mais ne peut garantir l’absence d’erreurs ou d’omissions.
        L’éditeur ne pourra être tenu responsable en cas d’inexactitude des
        informations présentées ou d’éventuels dysfonctionnements du site.
      </p>

      <p className="mentions-paragraphe">
        <strong>4. Liens externes</strong>
      </p>
      <p className="mentions-paragraphe">
        Ce site peut contenir des liens vers d’autres sites. Regarde où tu
        marches n’est pas responsable du contenu ou de la politique de
        confidentialité de ces sites tiers.
      </p>

      <p className="mentions-paragraphe">
        <strong>5. Données personnelles</strong>
      </p>
      <p className="mentions-paragraphe">
        Voir la{" "}
        <Link to="/privacy-policy" className="link-privacy">
          Politique de confidentialité
        </Link>{" "}
        ci-dessous.
      </p>

      <p className="mentions-paragraphe">
        <strong>6. Droit applicable</strong>
      </p>
      <p className="mentions-paragraphe">
        Les présentes mentions légales sont soumises aux lois françaises. Tout
        litige sera porté devant les tribunaux compétents.
      </p>
    </section>
  );
}
