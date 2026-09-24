import type { LegalDoc } from "../types";

export const dpaFr: LegalDoc = {
  title: "Contrat de sous-traitance",
  description: "Contrat de sous-traitance au sens de l'article 28 du RGPD pour les licences d'équipe de Fast Forward >> Typing.",
  updated: "24 septembre 2026",
  content: `Le présent contrat relatif au traitement de données personnelles pour le compte d'un tiers (ci-après le « Contrat ») s'applique entre le Client (le « Responsable du traitement ») et **{{legalName}}**, {{address}}, SIRET {{siret}} (le « Sous-traitant »). Il devient partie intégrante du contrat de licence d'équipe conclu selon les [conditions générales pour les entreprises](/fr/business-terms) et satisfait aux exigences de l'article 28 du Règlement général sur la protection des données (RGPD). Aucune signature distincte n'est nécessaire ; sur demande, nous fournissons un exemplaire signé.

## 1. Objet, durée, nature et finalité

Le Sous-traitant met à disposition du Responsable du traitement une plateforme en ligne d'entraînement à la dactylographie (comptes utilisateur, progression, résultats de mesure, tableau de bord d'équipe, certificats). Il traite à cette occasion des données personnelles des Utilisateurs du Responsable du traitement exclusivement pour son compte. Le traitement comprend la collecte, l'enregistrement, l'analyse, l'affichage, l'exportation, la transmission au Responsable du traitement et l'effacement. Le Contrat s'applique pendant la durée du contrat principal.

## 2. Types de données et catégories de personnes concernées

- **Personnes concernées :** Utilisateurs désignés par le Responsable du traitement (par exemple salariés, apprentis)
- **Données :** nom, adresse e-mail professionnelle, rattachement à des équipes, langue et disposition de clavier, niveau, résultats de frappe (vitesse, précision), horodatage des utilisations, certificats délivrés
- **Aucune catégorie particulière** de données au sens de l'article 9 du RGPD

## 3. Instructions

Le Sous-traitant ne traite les données que sur instruction documentée du Responsable du traitement. Le contrat principal, le présent Contrat et l'utilisation des fonctionnalités de la plateforme par le Responsable du traitement valent instructions. Les autres instructions sont données par écrit. S'il estime qu'une instruction est illicite, le Sous-traitant en informe sans délai le Responsable du traitement et peut suspendre son exécution jusqu'à clarification. Aucun traitement n'a lieu pour ses propres finalités, à l'exception de statistiques d'utilisation anonymisées, non rattachables à des personnes ni au Client, destinées à améliorer le service.

## 4. Confidentialité

Le Sous-traitant veille à ce que les personnes autorisées à traiter les données soient tenues à la confidentialité ou soumises à une obligation légale appropriée de confidentialité.

## 5. Mesures techniques et organisationnelles

Le Sous-traitant met en œuvre des mesures techniques et organisationnelles appropriées au sens de l'article 32 du RGPD. Elles comprennent actuellement :

- le chiffrement des transmissions (TLS) et le chiffrement des données stockées chez le fournisseur de base de données
- le contrôle d'accès selon le principe du moindre privilège, des accès nominatifs, la séparation des données des différents clients
- une authentification sans mot de passe par lien de connexion à usage unique, la limitation des sessions
- des sauvegardes et des procédures de restauration
- la journalisation des événements pertinents pour la sécurité
- le choix attentif et l'encadrement contractuel des sous-traitants ultérieurs
- une politique de suppression et un réexamen régulier des mesures

Les mesures peuvent évoluer tant que le niveau de protection n'est pas réduit.

## 6. Sous-traitants ultérieurs

Le Responsable du traitement donne une autorisation générale de recourir à des sous-traitants ultérieurs. Sont actuellement utilisés :

| Sous-traitant ultérieur | Siège | Prestation | Lieu des données et garantie |
|---|---|---|---|
| Vercel Inc. | États-Unis | Hébergement et diffusion de la plateforme | Réseau mondial ; Data Privacy Framework UE-États-Unis ou clauses contractuelles types |
| Supabase Inc. | États-Unis | Base de données et connexion | Serveurs dans l'UE ; clauses contractuelles types |
| Resend, Inc. | États-Unis | Envoi des e-mails de connexion et du système | Clauses contractuelles types |
| Stripe Payments Europe, Limited | Irlande | Paiements (pas de données utilisateur des tableaux de bord) | UE |

Le Sous-traitant informe par écrit le Responsable du traitement de tout changement envisagé au moins 30 jours à l'avance. Le Responsable du traitement peut s'y opposer pour un motif légitime de protection des données dans ce délai. À défaut d'accord, il peut résilier le contrat à la date du changement. Le Sous-traitant impose contractuellement à ses sous-traitants ultérieurs un niveau de protection équivalent et répond de leur exécution.

## 7. Assistance au Responsable du traitement

Le Sous-traitant assiste le Responsable du traitement par des mesures appropriées pour répondre aux demandes des personnes concernées (articles 12 à 22 du RGPD) et pour respecter les obligations des articles 32 à 36 (sécurité, notification, analyse d'impact). Si une personne concernée adresse directement une demande au Sous-traitant, il la renvoie au Responsable du traitement.

## 8. Notification des violations de données

Le Sous-traitant notifie au Responsable du traitement toute violation de données à caractère personnel sans délai injustifié, et au plus tard 48 heures après en avoir pris connaissance, et fournit les informations nécessaires à la notification à l'autorité de contrôle, dans la mesure où elles sont disponibles.

## 9. Transferts hors de l'Union européenne

Des données ne sont transférées vers des pays hors de l'Espace économique européen que dans la mesure nécessaire via les sous-traitants ultérieurs cités et lorsque les conditions des articles 44 et suivants du RGPD sont remplies (décision d'adéquation, notamment le Data Privacy Framework UE-États-Unis, ou clauses contractuelles types assorties de mesures complémentaires).

## 10. Effacement et restitution

À la fin du contrat, le Sous-traitant met à disposition sur demande les résultats sous forme d'export, puis efface les données personnelles des Utilisateurs dans un délai de 30 jours, sauf obligation légale de conservation. Les données figurant dans des sauvegardes sont écrasées lors du cycle normal, au plus tard après 90 jours. Sur demande, le Sous-traitant confirme l'effacement par écrit.

## 11. Preuves et audits

Le Sous-traitant met à la disposition du Responsable du traitement les informations nécessaires pour démontrer le respect du Contrat. Le Responsable du traitement peut réaliser ou faire réaliser des audits moyennant un préavis d'au moins 30 jours, au plus une fois par an et pendant les heures ouvrables habituelles, en priorité à distance sur la base de la documentation. Les audits motivés par une violation de données demeurent possibles. Les secrets d'affaires et informations confidentielles du Sous-traitant et de ses autres clients doivent être préservés. Les coûts de l'audit sont supportés par le Responsable du traitement, sauf si l'audit révèle des manquements substantiels.

## 12. Responsabilité, priorité, droit applicable

La responsabilité est régie par le contrat principal et l'article 82 du RGPD. En cas de contradiction entre le présent Contrat et le contrat principal, le présent Contrat prévaut pour le traitement des données personnelles. Le droit français s'applique ; les exigences du RGPD demeurent. Contact pour les questions de protection des données : {{legalName}}, {{email}}.`,
};
