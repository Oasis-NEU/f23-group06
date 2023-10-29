import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea} from "@nextui-org/react";
import {Select, SelectItem, Chip} from "@nextui-org/react";
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

export default function TaskModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    //Get members from API. Style chips programmatically. Colors should be consistent accross renders.
    const members = [
        {name: "Russell Leung", id: 1},
        {name: "Scott Abramson", id: 2},
        {name: "Vincient Demiasip", id: 3},
        {name: "Campbell Lee", id: 4},
    ]

    return (
        <>
            <Button onPress={onOpen} color="primary">Add Task</Button>
            <Modal 
                backdrop="blur"
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Add Task</ModalHeader>
                    <ModalBody>
                        <Input
                            isRequired
                            autoFocus
                            label="Task Name"
                            variant="bordered"
                        />
                        <Textarea
                            isRequired
                            label="Description"
                            variant="bordered"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField defaultValue={dayjs()} />
                        </LocalizationProvider>
                        {/* What is this location input */}
                        <Input
                            isRequired
                            label="Location"
                            variant="bordered"
                        />
                        <label className="text-sm mb-0">Members</label>
                        <Select
                            isRequired
                            items={members}
                            selectionMode="multiple"
                            isMultiline={true}
                            className="mt-0"
                            size="lg"
                            classNames={{
                                base: "max-w-xs",
                                trigger: "min-h-unit-8",
                                innerWrapper: "pt-1 pb-1"
                            }}
                            renderValue={(items) => {
                                return (
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item) => (
                                    <div key={item.key}>{item.rendered}</div>
                                    ))}
                                </div>
                                );
                            }}
                        >
                            {members.map((m) => (
                                <SelectItem key={m.id}>
                                    <Chip color="primary">{m.name}</Chip>
                                </SelectItem>
                            ))}
                        </Select>
                        <div className="flex py-2 px-1 justify-between"></div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>Close</Button>
                        <Button color="primary" onPress={onClose}>Make Task</Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
  );
}
