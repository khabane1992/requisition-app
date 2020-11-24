package sn.sonatel.dsi.dac.dif.requisition.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.sonatel.dsi.dac.dif.requisition.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
