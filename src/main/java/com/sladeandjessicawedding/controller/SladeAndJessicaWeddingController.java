package com.sladeandjessicawedding.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SladeAndJessicaWeddingController {

    @GetMapping("/about")
    public String about(Model model) {
        return "about";
    }

}
