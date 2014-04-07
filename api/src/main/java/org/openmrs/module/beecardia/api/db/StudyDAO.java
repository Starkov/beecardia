package org.openmrs.module.beecardia.api.db;

import org.openmrs.module.beecardia.Study;

import java.util.List;

public interface StudyDAO {
    public Study getByHashId(String hashId);
    public List<Study> getStudyList();
    public void save(Study s);
    public void saveList(List<Study> studies);
    public void update(Study study);
    public void delete(String hashId);
}
