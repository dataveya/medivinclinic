import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`logo ${inverse ? "logo--inverse" : ""}`} aria-label="Medivin Clinic">
      <Image className="logo__image" src="/logo.svg" alt="" width={259} height={334} priority />
      <span className="logo__wording">
        <strong>Medivin</strong>
        <small>Clinic</small>
      </span>
    </span>
  );
}
