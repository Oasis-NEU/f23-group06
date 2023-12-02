import React from "react";
import supabase from "../backend/supabase";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { Select, SelectItem, Chip } from "@nextui-org/react";
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

export default function TaskModal({ members, club_id }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

                        <form action="/backend/task" method="POST">
                            <ModalHeader className="flex flex-col gap-1">Add Task</ModalHeader>
                            <ModalBody>
                                <input type="hidden" value={club_id} name="club_id" id="club_id"></input>
                                <Textarea
                                    isRequired
                                    label="Task Description"
                                    variant="bordered"
                                    id="description"
                                    name="description"
                                />
                                <input type="hidden" value={new Date()} id="date" name="date"/>
                                <label className="text-sm mb-0">Members</label>
                                <Select
                                    isRequired
                                    items={members}
                                    selectionMode="multiple"
                                    isMultiline={true}
                                    className="mt-0"
                                    size="lg"
                                    id="assignee"
                                    name="assignee"
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
                                        <SelectItem key={m.users.id}>
                                            <Chip color="primary">{m.name}</Chip>
                                        </SelectItem>
                                    ))}
                                </Select>
                                <div className="flex py-2 px-1 justify-between"></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>Close</Button>
                                <Button color="primary" type="Submit" value="submit">Make Task</Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
