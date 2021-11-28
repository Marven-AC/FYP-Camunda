package com.example.workflow;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
public class Project {
    public static ArrayList<Project> allProjects = new ArrayList<>();
    private String title;
    private String description;
    private String email;
    private boolean accepted;

    public Project(String title, String description, boolean accepted) {
        this.title = title;
        this.description = description;
        this.accepted = accepted;
    }

    public Project() {
        super();
    }

    @GetMapping("/getProjects")
    public static ArrayList<Project> getAllProjects() {
        System.out.println(allProjects);
        return allProjects;
    }

    public static void setAllProjects(ArrayList<Project> allProjects) {
        Project.allProjects = allProjects;
    }

    @PostMapping("/addProject")
    public static void addProject(@RequestBody Project project){
        allProjects.add(project);
        System.out.println("project added");
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isAccepted() {
        return accepted;
    }

    @PostMapping("validateProject")
    public static void validateProject(@RequestBody ArrayList<Project> projects){
        allProjects = projects;
        System.out.println("project validated");
    }

    public void setAccepted() {
        this.accepted = true;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
