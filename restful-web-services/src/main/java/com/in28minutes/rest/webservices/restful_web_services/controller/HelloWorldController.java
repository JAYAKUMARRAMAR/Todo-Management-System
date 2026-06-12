package com.in28minutes.rest.webservices.restful_web_services.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController
{

    @GetMapping(path = "/helloworld")
    public String helloworld()
    {
        return "Hello World";
    }

    @GetMapping(path = "/helloworldbean")
    public HelloWorldBean helloworldbean()
    {
       return new HelloWorldBean("Hello World - Changed");
        //throw new RuntimeException("Some error has happened! Contact support at ***-***-****");
    }

    @GetMapping("/helloworld/path-variable/{name}")
    public HelloWorldBean helloworldvariable(@PathVariable String name)
    {
        return new HelloWorldBean(String.format("Hello World %s!", name));
    }
}