import "./style.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <h1 className="policy-title">Politique de confidentialité</h1>
      <p className="privacy-paragraphe">
        <strong>1. Collecte des données</strong>
      </p>
      <p className="privacy-paragraphe">
        Lorsque vous utilisez le formulaire de soumission des cartes, nous
        collectons les informations suivantes :
      </p>
      <ul className="privacy-ul">
        <li>Nom ou pseudo</li>
        <li>Email (optionnel)</li>
        <li>Valeur et couleur de la carte</li>
        <li>Lieu et date de la trouvaille</li>
        <li>Description de la scène</li>
        <li>Photo de la carte</li>
      </ul>
      <p className="privacy-paragraphe">
        Ces informations sont fournies volontairement par l’utilisateur.
      </p>

      <p className="privacy-paragraphe">
        <strong>2. Utilisation des données</strong>
      </p>
      <p className="privacy-paragraphe">
        Les données collectées sont utilisées uniquement pour :
      </p>
      <ul className="privacy-ul">
        <li>Afficher et organiser les cartes collectées sur le site.</li>
        <li>
          Vous contacter si nécessaire (si vous avez renseigné votre email).
        </li>
        <li>
          Analyser les tendances du jeu et améliorer l’expérience utilisateur.
        </li>
      </ul>
      <p className="privacy-paragraphe">
        Aucune donnée ne sera vendue, échangée ou partagée avec des tiers sans
        consentement.
      </p>

      <p className="privacy-paragraphe">
        <strong>3. Stockage et sécurité des données</strong>
      </p>
      <p className="privacy-paragraphe">
        Les données collectées sont stockées de manière sécurisée et ne seront
        accessibles que par l’administrateur du site.
      </p>
      <p className="privacy-paragraphe">
        Nous mettons en place des mesures de protection pour éviter tout accès
        non autorisé.
      </p>

      <p className="privacy-paragraphe">
        <strong>4. Durée de conservation</strong>
      </p>
      <p className="privacy-paragraphe">
        Les données seront conservées tant que le projet est actif. Vous pouvez
        demander leur suppression à tout moment.
      </p>

      <p className="privacy-paragraphe">
        <strong>5. Droits des utilisateurs</strong>
      </p>
      <p className="privacy-paragraphe">
        Conformément au{" "}
        <strong>RGPD (Règlement Général sur la Protection des Données)</strong>,
        vous avez le droit de :
      </p>
      <ul className="privacy-ul">
        <li>Accéder à vos données personnelles.</li>
        <li>Demander la rectification ou la suppression de vos données.</li>
        <li>Retirer votre consentement à tout moment.</li>
      </ul>
      <p className="privacy-paragraphe">
        Pour toute demande, contactez-nous à :{" "}
        <a href="mailto:regardesoutumarches@gmail.com" className="link-mail">
          regardesoutumarches@gmail.com
        </a>
        .
      </p>

      <p className="privacy-paragraphe">
        <strong>6. Cookies</strong>
      </p>
      <p className="privacy-paragraphe">
        Le site peut utiliser des cookies à des fins de navigation et d’analyse.
        Vous pouvez configurer votre navigateur pour les refuser.
      </p>

      <p className="privacy-paragraphe">
        <strong>7. Modification de la politique</strong>
      </p>
      <p className="privacy-paragraphe">
        Nous nous réservons le droit de modifier cette politique. Toute
        modification sera publiée sur cette page.
      </p>
    </section>
  );
}
