# Visual Board Test

This is a test project for candidates that are applying for the position of Frontend Developer at BricksInc.

## Introduction

This project contains a simple visual board layout build with JS and SolidJS reactivity system. 

The board consists of rows that are divided into columns with a fixed width. Maximum number of columns is 12.

Items on the board can take up one or more columns.

The board is build upon a config object that can be found in `src/utils/config.ts`. Types for config are defined in `src/types/config.ts`.

## Implemented features

- Rows can be resized by dragging the divider between them
- Gaps in the config are filled with empty board items

## Tasks

1. Implement a feature that allows the user to add a new board item to the board 
2. Implement a feature that allows the user to drag and drop board items to a different position on the board
3. Implement a feature that allows the user to resize board items within the same row
4. Implement a feature that allows the user to remove board items from the board

## Requirements

- The project should be build with pure JS and SolidJS reactivity system
- The project should be build with Typescript
- 3d party libraries are not desired, but if you do use them, please explain why

