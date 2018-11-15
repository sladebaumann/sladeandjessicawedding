package com.sladeandjessicawedding.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloWorld {

    @GetMapping("/helloworld")
    public String helloworld() {
        return "Hello World";
    }
}
