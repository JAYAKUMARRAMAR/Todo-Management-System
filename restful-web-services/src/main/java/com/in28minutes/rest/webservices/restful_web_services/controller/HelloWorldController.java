package com.in28minutes.rest.webservices.restful_web_services.controller;

import org.springframework.web.bind.annotation.*;

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
        return new HelloWorldBean("Hello World");
    }

    @GetMapping("/helloworld/variable-name/{name}")
    public HelloWorldBean helloworldvariable(@PathVariable String name)
    {
        return new HelloWorldBean("Hello, " + name + "!");
    }
}