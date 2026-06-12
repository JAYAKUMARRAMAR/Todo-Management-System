package com.in28minutes.rest.webservices.restful_web_services.todo;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
    
    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;
    static{
        todos.add(new Todo(++idCounter, "in28minutes", "Learn AWS", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn DevOps", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn Full Stack Development", new Date(), false));
    }
    public List<Todo> findAll(){
        return todos;
    }
}
