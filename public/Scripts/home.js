/*
Name: COMP229-F2020-Assignment1
Author: Julian Miguel Alapan
Student#: 300836721
Date:
*/
// IIFE module
"use strict";
let pObjects;
(function(pObjects)
{
    class Paragraphs 
    {
        setParagraphs(JSON_Data)
        {
            this.id = JSON_Data.id;
            this.value = JSON_Data.value;
        }

    }
    pObjects.Paragraphs = Paragraphs;

}(pObjects || (pObjects = {})));